import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CardComponent} from "../../core/card/card.component";
import {TextBlockComponent} from "../../core/text-block/text-block.component";
import {IconMailComponent} from "../../icons/icon-mail/icon-mail.component";
import {IconPhoneComponent} from "../../icons/icon-phone/icon-phone.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, CardComponent, TextBlockComponent, IconMailComponent, IconPhoneComponent, NgOptimizedImage],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
}
