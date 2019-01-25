import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    now = Date();
    posts = [
        {
            title: 'Mon premier post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, cumque ',
            loveIts: 3,
            created_at: this.now
        },
        {
            title: 'Mon deuxième post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ali',
            loveIts: 3,
            created_at: this.now
        },
        {
            title: 'Encore un post',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing e',
            loveIts: -2,
            created_at: this.now
        },
    ];
}
