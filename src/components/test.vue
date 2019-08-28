<template>
  <div>
    <div class="col-sm-4" data-enable-grammarly="false">
      <h2>
        <b>Intern Project</b>
        <br />
      </h2>
      <p>
        <span style="font-weight: inherit;">Technology stack:</span>
        <br />
      </p>
      <p></p>
      <ul>
        <li>vue&nbsp;</li>
        <li>vuex&nbsp;</li>
        <li>vue router&nbsp;</li>
        <li>axios&nbsp;</li>
        <li>vux</li>
      </ul>
      <p></p>
    </div>
    <div class="col-xs-6 col-sm-4" data-enable-grammarly="false">
      <img
        height='350px'
        data-no-retina="true"
        src="https://images.cakeresume.com/joRYw/cheng-chung-man/bc63a158-8971-4a9c-bb48-0b42d0a10e6d.png"
        alt="Paragraph image 04 00@2x"
        data-uploader-id="2"
        data-state="empty"
        style="border-radius: 0px;"
      />
    </div>
    <div class="col-xs-6 col-sm-4" data-enable-grammarly="false">
      <img
        data-no-retina="true"
        height='350px'
        src="https://images.cakeresume.com/joRYw/cheng-chung-man/2e3aedcd-5961-4e02-a6b6-fbbb4120869f.png"
        alt="Paragraph image 04 01@2x"
        data-uploader-id="3"
        data-state="empty"
        style="border-radius: 0px;"
      />
    </div>
  </div>
</template>

<script>
import { Previewer, TransferDom } from "vux";

export default {
  directives: {
    TransferDom
  },
  components: {
    Previewer
  },
  methods: {
    logIndexChange(arg) {
      console.log(arg);
    },
    show(index) {
      this.$refs.previewer.show(index);
    }
  },
  data() {
    return {
      list: [
        {
          msrc:
            "http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwu9ze86j20m80b40t2.jpg",
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg",
          w: 800,
          h: 400
        },
        {
          msrc:
            "http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg",
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwvqwuoaj20xc0p0t9s.jpg",
          w: 1200,
          h: 900
        },
        {
          msrc:
            "http://ww1.sinaimg.cn/thumbnail/663d3650gy1fplwwcynw2j20p00b4js9.jpg",
          src:
            "http://ww1.sinaimg.cn/large/663d3650gy1fplwwcynw2j20p00b4js9.jpg"
        }
      ],
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll(".previewer-demo-img")[
            index
          ];
          // get window scroll Y
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect();
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    };
  }
};
</script>
