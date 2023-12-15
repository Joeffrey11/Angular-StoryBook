import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book, WriterService } from './writer.service';

@Component({
  selector: 'app-writer-dashboard',
  templateUrl: './writer-dashboard.component.html',
  styleUrls: ['./writer-dashboard.component.scss'],
})
export class WriterDashboardComponent implements OnInit {
  books: Book[] = [];
  @Output() selectedId = new EventEmitter<number>();
  isLoading = false;
  constructor(private writerService: WriterService) {}

  // fetch data
  ngOnInit(): void {
    this.isLoading = true;
    this.writerService.getAllBooks().subscribe((result) => {
      this.books = result.data;
      this.isLoading = false;
    });
  }

  // remove data
  removeBook(id: any) {
    let confirmed = confirm('Do you want to remove this?');
    if (confirmed) {
      this.writerService.deleteBook(id).subscribe((result) => {
        location.reload();
        alert(`Book ${id} deleted!`);
      });
    }
  }

  selectItem(id: any) {
    this.writerService.setData(id);
  }

  // Add any other methods or logic you need
}
