import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from './../../services/post.service';

@Component({
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {

  postsList: Post[] = [];

  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(value => this.postsList = value);
   }
}
