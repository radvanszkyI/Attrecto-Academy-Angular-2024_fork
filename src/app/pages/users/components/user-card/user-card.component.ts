import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../classes/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input() user: User;

  @Output() deleteClicked = new EventEmitter<number>//jelezni a parent komponensnek h valmi tortént
  // ezzel oldjuk meg hogyha a card-on belül az x-re kattintunk, akkor arról egy külön event jöjjön létre

  deleteUser(id: number, event: MouseEvent) {
    event.stopPropagation() //  az alapértelmezett click esemény elnyomjuk
    this.deleteClicked.emit(id);
  }
}
