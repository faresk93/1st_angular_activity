import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-post-list-item-component',
    templateUrl: './post-list-item-component.component.html',
    styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
    @Input() reactions = 0;
    @Input() postTitle: string;
    @Input() postContent: string;
    @Input() postDate: Date;

    onLoveIt() {
        this.reactions++;
        console.log(this.reactions);
    }

    onHateIt() {
        this.reactions--;
        console.log(this.reactions);
    }
    constructor() {
    }

    ngOnInit() {
    }

}
