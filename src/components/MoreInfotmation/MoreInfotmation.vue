<template>
  <div>
    <div class="more-information" v-if="!comment" @click="comment = !comment">
      Подробнее
    </div>
    <div class="more-information" v-if="comment" @click="comment = !comment">
      Скрыть
    </div>
    <div class="detail-info" v-if="comment">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis lacinia
      tortor. In vestibulum bibendum metus, vitae rutrum mi tristique in.
      Vestibulum placerat consequat turpis, vitae placerat arcu. Maecenas
      molestie lorem id tincidunt euismod. Phasellus facilisis augue consectetur
      interdum vulputate. Ut nec ante magna. Nullam interdum id magna non
      lacinia. Aenean sed metus magna. Aenean lacus leo, accumsan eget felis et,
      imperdiet luctus massa.
    </div>
  </div>
</template>

<script>
export default {
  name: "MoreInfotmation",
  data() {
    return {
      comment: false,
    };
  },
};
</script>

<style scoped>
.more-information {
  text-align: right;
}
.more-information:hover {
  color: rgb(9, 110, 199);
  cursor: pointer;
}
.detail-info {
  overflow: scroll;
  height: 9rem;
  position: absolute;
  top: 0;
  background: #fff;
  z-index: 1;
}
</style>
