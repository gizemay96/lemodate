import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const options = {
      opacityIn: [0, 1],
      scaleIn: [0.2, 1],
      scaleOut: 3,
      durationIn: 800,
      durationOut: 600,
      delay: 500,
      easing: "easeInExpo"
    };


    anime.timeline({ loop: false })
      .add({
        targets: '.text-animation .one',
        opacity: options.opacityIn,
        scale: options.scaleIn,
        duration: options.durationIn
      })
      .add({
        targets: '.text-animation .one',
        opacity: 0,
        scale: options.scaleOut,
        easing: options.easing,
        duration: options.durationOut,
        delay: options.delay
      })
      .add({
        targets: '.text-animation .two',
        opacity: options.opacityIn,
        scale: options.scaleIn,
        duration: options.durationIn
      })
      .add({
        targets: '.text-animation .two',
        opacity: 0,
        scale: options.scaleOut,
        easing: options.easing,
        duration: options.durationOut,
        delay: options.delay,
      })
      .add({
        targets: '.text-animation .three',
        opacity: options.opacityIn,
        scale: options.scaleIn,
        duration: options.durationIn
      })
      .add({
        targets: '.text-animation .three',
        opacity: 0,
        scale: options.scaleOut,
        easing: options.easing,
        duration: options.durationOut,
        delay: options.delay
      })
      .add({
        targets: '.text-animation',
        height: "400px"
      })
      .add({
        targets: '.text-animation .img',
        opacity: options.opacityIn,
        duration: 5000
      })
      // .add({
      //   targets: '.text-animation .img',
      //   opacity: 1,
      //   easing: options.easing,
      //   duration: options.durationOut,
      //   delay: options.delay
      // })
  }

}
