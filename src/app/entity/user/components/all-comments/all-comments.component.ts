import { Component, OnInit } from '@angular/core';
import { Comment } from './../../../../models/Comment';
import { CommentService } from './../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {

  commentList: Comment[] = [];

  constructor(private commentService: CommentService) {
    this.commentService.getComment().subscribe(value => this.commentList = value);
   }


}
