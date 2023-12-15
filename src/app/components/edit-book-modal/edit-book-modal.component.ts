import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WriterService } from 'src/app/layout/writer-dashboard/writer.service';

@Component({
  selector: 'app-edit-book-modal',
  templateUrl: './edit-book-modal.component.html',
  styleUrls: ['./edit-book-modal.component.scss'],
})
export class EditBookModalComponent implements OnInit {
  selected_id: any;

  isLoading = false;
  book_img: any;
  bookForm = new FormGroup({
    writer_name: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    genre: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    body: new FormControl(''),
  });

  constructor(private writerService: WriterService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.writerService.getData().subscribe((res) => {
      this.selected_id = res;
      this.loadBookData(res);
    });
  }

  loadBookData(id: any) {
    this.isLoading = true;
    this.writerService.getOneBookById(id).subscribe((result) => {
      const { writer_name, name, genre, description, body } = result.data[0];
      this.isLoading = false;

      this.bookForm.patchValue({
        writer_name: writer_name,
        name: name,
        genre: genre,
        description: description,
        body: body,
      });
    });
  }

  editBook(event: Event) {
    this.isLoading = true;

    this.writerService
      .updateBook(this.bookForm.value, this.book_img, this.selected_id)
      .subscribe((result) => {
        if (result.status) {
          this.isLoading = false;

          alert('Book successfully updated!');
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
