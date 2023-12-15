import { Component } from '@angular/core';
import { Book, WriterService } from '../writer-dashboard/writer.service';


@Component({
  selector: 'app-reader-dashboard',
  templateUrl: './reader-dashboard.component.html',
  styleUrls: ['./reader-dashboard.component.scss']
})
export class ReaderDashboardComponent {
  books: Book[] = [];
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
}
