import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-jstraining',
  templateUrl: './jstraining.component.html',
  styleUrls: ['./jstraining.component.css']
})
export class JSTrainingComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    $(function () {
      // alert("Hello Jquery!")
      $("h2").css("color", "navy");
      $("h3").css("color", "green");
      $(".pred").css("color", "red");
      $(".backyellow").css("background-color", "yellow");
      $(".addtext").text("テキスト追加");
      $(".updatetext").text("テキスト上書き");
      $(".addclass").addClass("add1");
      $(".removelist li").remove();

      $("#close").click(function () {
        $(".messages").hide();
      });

      $("#open").click(function () {
        $(".messages").show();
      });

      $("#clicked").click(() => {
        alert("クリックしました！");
      });

      $(".prependtext").append("文字追加");
    });
  }

}
