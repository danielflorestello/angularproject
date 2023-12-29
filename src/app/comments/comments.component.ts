import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>

    <img src="https://th.bing.com/th/id/OIP.AedHX70XKjJ4f-ZTt7f_ZQAAAA?rs=1&pid=ImgDetMain" />

    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur aut consectetur quibusdam amet commodi, adipisci quasi perferendis voluptatem, dolor sequi eos autem? Itaque quo, sapiente error magni distinctio quis. Velit?
    </p>
  `,
  styles: `
    img {
      width: 50%;
      height: auto;
    }
  `,
})
export class CommentsComponent {

}
