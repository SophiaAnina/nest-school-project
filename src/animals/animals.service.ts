
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './entities/animal.entity';
import { CreateAnimalsDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalsService {
  constructor(
    @InjectRepository(Animal)
    private animalsRepository: Repository<Animal>,
  ) {}

  create(createAnimalDto: CreateAnimalsDto): Promise<Animal> {
    const animal = this.animalsRepository.create(createAnimalDto);
    return this.animalsRepository.save(animal);
  }

  findAll(): Promise<Animal[]> {
    return this.animalsRepository.find();
  }

  findOne(id: number): Promise<Animal | null> {
    return this.animalsRepository.findOneBy({ id });
  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
    const animal = await this.animalsRepository.preload({
      id,
      ...updateAnimalDto,
    });
    if (!animal) {
      throw new NotFoundException(`Animal not found`);
    }
    return this.animalsRepository.save(animal);
  }

  async remove(id: number): Promise<void> {
    await this.animalsRepository.delete(id);
  }
}
