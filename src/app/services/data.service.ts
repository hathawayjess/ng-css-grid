import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url = 'dummy.json';

  constructor() { }

  dummyData = [
    {
      'title': 'Ullamcorper velit',
      'subtitle': 'Massa tincidunt',
      'text': 'Malesuada fames ac turpis egestas. Arcu dictum varius duis at consectetur. Mi tempus imperdiet elit pellente.',
      'link1': 'nulla malesuada ',
      'link2': 'Sed adipiscing'
    },
    {
      'title': 'Curabitur vitae nunc',
      'subtitle': 'Posuere urna nec',
      'text': 'Convallis convallis tellus id interdum velit laoreet. Ac odio tempor orci dapibus. Tellus id velit.',
      'link1': 'Varius duis',
      'link2': 'lorem donec'
    },
    {
      'title': 'Ut tortor pretium',
      'subtitle': 'Mattis nunc sed ',
      'text': 'Consectetur adipiscing elit pellentesque habitant. Enim nulla aliquet porttitor lacus luctus tortor.',
      'link1': 'Faucibus nisl',
      'link2': 'Tortor pretium'
    },
    {
      'title': 'Lorem ipsum dolor',
      'subtitle': 'Sit amet, consectetur',
      'text': 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna fugiat nulla pariatur.',
      'link1': 'Ut enim',
      'link2': 'ad minim'
    },
    {
      'title': 'Duis aute irure',
      'subtitle': 'Reprehenderit in',
      'text': 'Consectetur adipiscing elit pellentesque habitant. Enim nulla aliquet porttitor lacus luctus.',
      'link1': 'Excepteur sint',
      'link2': 'occaecat non'
    },
    {
      'title': 'Ullamcorper velit',
      'subtitle': 'Massa tincidunt',
      'text': 'Malesuada fames ac turpis egestas. Arcu dictum varius duis at consectetur. Mi tempus.',
      'link1': 'nulla malesuada ',
      'link2': 'Sed adipiscing'
    },
    {
      'title': 'Ullamcorper velit',
      'subtitle': 'Massa tincidunt',
      'text': 'Malesuada fames ac turpis egestas. Arcu dictum varius duis at consectetur. Mi tempus.',
      'link1': 'nulla malesuada ',
      'link2': 'Sed adipiscing'
    },
    {
      'title': 'Curabitur vitae nunc',
      'subtitle': 'Posuere urna nec',
      'text': 'Convallis convallis tellus id interdum velit laoreet. Ac odio tempor orci dapibus. Tellus id.',
      'link1': 'Varius duis',
      'link2': 'lorem donec'
    },
    {
      'title': 'Ut tortor pretium',
      'subtitle': 'Mattis nunc sed ',
      'text': 'Consectetur adipiscing elit pellentesque habitant. Enim nulla aliquet porttitor lacus luctus.',
      'link1': 'Faucibus nisl',
      'link2': 'Tortor pretium'
    },
    {
      'title': 'Lorem ipsum dolor',
      'subtitle': 'Sit amet, consectetur',
      'text': 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna fugiat nulla pariatur.',
      'link1': 'Ut enim',
      'link2': 'ad minim'
    },
    {
      'title': 'Duis aute irure dolor',
      'subtitle': 'Reprehenderit in',
      'text': 'Consectetur adipiscing elit pellentesque habitant. Enim nulla aliquet porttitor lacus luctus.',
      'link1': 'Excepteur sint',
      'link2': 'occaecat non'
    },
    {
      'title': 'Ullamcorper velit',
      'subtitle': 'Massa tincidunt',
      'text': 'Malesuada fames ac turpis egestas. Arcu dictum varius duis at consectetur. Mi tempus imperdiet.',
      'link1': 'nulla malesuada ',
      'link2': 'Sed adipiscing'
    },
    {
      'title': 'Ullamcorper velit',
      'subtitle': 'Massa tincidunt',
      'text': 'Malesuada fames ac turpis egestas. Arcu dictum varius duis at consectetur. Mi tempus imperdiet.',
      'link1': 'nulla malesuada ',
      'link2': 'Sed adipiscing'
    },
    {
      'title': 'Curabitur vitae nunc',
      'subtitle': 'Posuere urna nec',
      'text': 'Convallis convallis tellus id interdum velit laoreet. Ac odio tempor orci dapibus. Tellus id.',
      'link1': 'Varius duis',
      'link2': 'lorem donec'
    },
    {
      'title': 'Ut tortor pretium',
      'subtitle': 'Mattis nunc sed ',
      'text': 'Consectetur adipiscing elit pellentesque habitant. Enim nulla aliquet porttitor lacus luctus.',
      'link1': 'Faucibus nisl',
      'link2': 'Tortor pretium'
    },
    {
      'title': 'Lorem ipsum dolor',
      'subtitle': 'Sit amet, consectetur',
      'text': 'Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna fugiat nulla pariatur.',
      'link1': 'Ut enim',
      'link2': 'ad minim'
    },
    {
      'title': 'Duis aute irure',
      'subtitle': 'Reprehenderit in',
      'text': 'Consectetur adipiscing elit pellentesque habitant. Enim nulla aliquet porttitor lacus luctus.',
      'link1': 'Excepteur sint',
      'link2': 'occaecat non'
    },
    {
      'title': 'Ullamcorper velit',
      'subtitle': 'Massa tincidunt',
      'text': 'Malesuada fames ac turpis egestas. Arcu dictum varius duis at consectetur. Mi tempus imperdiet.',
      'link1': 'nulla malesuada ',
      'link2': 'Sed adipiscing'
    }
  ];

  getData() {
    return this.dummyData;
  }
}
