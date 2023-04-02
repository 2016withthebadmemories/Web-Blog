import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { postDto } from 'src/app/modules/home/modules/post/post.component';
import { PostService } from 'src/services/post.service';
import { CreateEditPostComponent } from '../create-edit-post/create-edit-post.component';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent {
  public post: postDto[] = [];
  constructor(private postService: PostService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getAllPost();
  }

  getAllPost() {
    this.postService.getAllPost().subscribe((rs) => {
      this.post = rs;
    });
  }
  create() {
    const dialogRef = this.dialog.open(CreateEditPostComponent, {});
    dialogRef.afterClosed().subscribe((rs) => {
      this.getAllPost();
    });
  }
  edit(item: postDto) {
    const dialogRef = this.dialog.open(CreateEditPostComponent, {
      data: {
        post: JSON.parse(JSON.stringify(item)),
      },
      width: '900px'
    });
    dialogRef.afterClosed().subscribe((rs) => {
      this.getAllPost();
    });
  }
  deletePost(id: number) {
    this.postService.delete(id).subscribe((rs) => {
      this.getAllPost();
    });
  }
}