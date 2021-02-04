import {Component, Input, OnInit} from '@angular/core';
import {IPosts} from '../../models/Posts';

@Component({
  selector: 'app-post-of-user-iteration',
  templateUrl: './post-of-user-iteration.component.html',
  styleUrls: ['./post-of-user-iteration.component.css']
})
export class PostOfUserIterationComponent implements OnInit {

  @Input()
  post: IPosts;

  constructor() {
  }

  ngOnInit(): void {
  }

}
