import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WriterService } from 'src/app/layout/writer-dashboard/writer.service';

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrls: ['./add-book-modal.component.scss'],
})
export class AddBookModalComponent {
  book_img: any;
  bookForm = new FormGroup({
    writer_name: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl(''),
  });

  constructor(private writerService: WriterService) {}

  addBook(event: Event) {
    let writer_id = localStorage.getItem('writer_id');
    this.writerService
      .addBook(this.bookForm.value, writer_id, this.book_img)
      .subscribe((result) => {
        if (result.status) {
          alert('Book successfully created');
          location.reload();
        } else {
          alert('Something went wrong');
        }
      });
  }

  getFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.book_img = file;
    }
  }

  get writer_name() {
    return this.bookForm.get('writer_name');
  }
  get name() {
    return this.bookForm.get('name');
  }
  get genre() {
    return this.bookForm.get('genre');
  }
  get description() {
    return this.bookForm.get('description');
  }
}
