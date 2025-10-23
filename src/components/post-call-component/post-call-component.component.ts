import {
  Component,
  OnInit,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Post } from '../../models/post';
import { PostCallServiceService } from '../../services/post-call-service.service';
import { FormsModule } from '@angular/forms';
import { max } from 'rxjs';
@Component({
  selector: 'app-post-call-component',
  imports: [FormsModule],
  templateUrl: './post-call-component.component.html',
  styleUrl: './post-call-component.component.css',
})
export class PostCallComponentComponent implements OnInit {
  actualPost: Post = { id: 0, title: '', body: '', userId: 0 };
  posts: Post[] = [];
  newPost: Post = { id: 0, title: '', body: '', userId: 0 };
  currentIndex: number = -1;
  maxId: number = 1;
  ngOnInit(): void {
    this.postCallSevice.getPosts().subscribe((data: Post[]) => {
      this.posts = data;
      this.maxId = this.posts.reduce((max, post) => (post.id > max ? post.id : max), 0);

    });
    
    
  }

  @ViewChild('modalEdit') editModal!: ElementRef;
  constructor(
    private postCallSevice: PostCallServiceService,
    private renderer: Renderer2
  ) {}

  showEditModal(post: Post): void {
    this.actualPost = { ...post };
    this.currentIndex = this.posts.indexOf(post);
    this.renderer.setStyle(this.editModal.nativeElement, 'display', 'flex');
  }

  cancelUpdate() {
    this.renderer.setStyle(this.editModal.nativeElement, 'display', 'none');
  }

  updatePost() {
    if (
      !this.actualPost.title ||
      !this.actualPost.body ||
      !this.actualPost.userId
    ) {
      alert('Por favor, complete todos los campos antes de actualizar.');
      return;
    }
    if (this.actualPost.id <= this.maxId) {
      this.postCallSevice.putPost(this.actualPost).subscribe((updatedPost) => {
        this.posts[this.currentIndex] = updatedPost;
        this.renderer.setStyle(this.editModal.nativeElement, 'display', 'none');
      });
    } else {
      this.posts[this.currentIndex] = this.actualPost;
      this.renderer.setStyle(this.editModal.nativeElement, 'display', 'none');
    }
  }

  removePost(postId: number): void {
  if (postId > this.maxId) {
    const index = this.posts.findIndex((post) => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
    }
    
    return;
  }

  this.postCallSevice.deletePost(postId).subscribe(() => {
    this.posts = this.posts.filter((post) => post.id !== postId+1);
  });
  
}

  savePost() {
    if (!this.newPost.title || !this.newPost.body || !this.newPost.userId) {
      alert('Por favor, complete todos los campos antes de guardar.');
      return;
    }
    this.postCallSevice.addPost(this.newPost).subscribe((createdPost) => {
      this.posts.push(createdPost);
      this.newPost = { id: 0, title: '', body: '', userId: 0 };
    });
  }
}
