import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ICategoryResponse } from '../../interface/category/category';

describe('CategoryService', () => {
  let service: CategoryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers: [CategoryService]
    });
    service = TestBed.inject(CategoryService);
    httpTestingController = TestBed.get(
      HttpTestingController
    )
  });

  afterEach(() => httpTestingController.verify())

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
