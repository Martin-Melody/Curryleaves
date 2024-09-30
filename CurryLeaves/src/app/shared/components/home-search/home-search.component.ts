import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent {
  searchQuery: string = ''; // Holds the current search input
  searchActive: boolean = false; // Tracks if search is active
  searchResults: string[] = []; // Holds the filtered search results
  highlightedIndex: number = -1; // Tracks which result is highlighted

  @Output() searchEvent = new EventEmitter<string>(); // Emits the search query

  // Dummy data for search results
  allResults: string[] = [
    'Sri Lankan Spices',
    'Ceylon Tea',
    'Traditional Rice',
    'Curry Powders',
    'Coconut Products',
  ];

  // Toggle the search bar visibility
  toggleSearch() {
    this.searchActive = !this.searchActive;
    if (!this.searchActive) {
      this.clearSearch();
    }
  }

  // Search dynamically based on the query
  onSearch(event?: Event) {
    if (this.searchQuery.trim()) {
      // Filter the results based on the search query
      this.searchResults = this.allResults.filter(result =>
        result.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.searchResults = []; // Clear results if search query is empty
    }
    this.highlightedIndex = -1; // Reset the highlighted index when searching
  }

  // Handle keyboard input for navigating the dropdown
  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.highlightedIndex = Math.min(this.highlightedIndex + 1, this.searchResults.length - 1);
    } else if (event.key === 'ArrowUp') {
      this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
    } else if (event.key === 'Enter' && this.highlightedIndex !== -1) {
      // Select the highlighted result if Enter is pressed
      this.selectResult(this.searchResults[this.highlightedIndex]);
      event.preventDefault(); // Prevent form submission
    }
  }

  // Clear the search input and results
  clearSearch() {
    this.searchQuery = '';
    this.searchResults = [];
    this.searchActive = false;
    this.highlightedIndex = -1;
  }

  // Select a result and emit it as the search term
  selectResult(result: string) {
    this.searchQuery = result; // Set the search query to the selected result
    this.searchEvent.emit(this.searchQuery); // Emit the search event with the selected result
    this.clearSearch(); // Clear the search after selecting a result
  }
}

