import { Component } from '@angular/core';
import { HugeiconsIconComponent } from '@hugeicons/angular';

import {
  Search01Icon,
  BellDotIcon,
  Setting07Icon,
  UserIcon
} from '@hugeicons/core-free-icons';

@Component({
  selector: 'app-header',
  imports: [HugeiconsIconComponent],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchIcon = Search01Icon;
  bellIcon = BellDotIcon;
  settingIcon = Setting07Icon;
  userIcon = UserIcon;
}
