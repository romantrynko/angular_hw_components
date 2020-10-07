import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/Post';
import { PostService } from './../../services/post.service';


@Component({
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit{

  postsList: Post[] = [];

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.data.subscribe(value => {
      console.log(value.allPosts);
      this.postsList = value.allPosts;
    });
    this.activatedRoute.queryParams.subscribe(value => {
      console.log(value);
      this.postService.getPostByUserId(value.id).subscribe(value1 => {
        console.log(value1);
      });
    });
  }

  ngOnInit(): void {
  }
}
