<template>
  <div>
    <van-calendar
      title="日历"
      :poppable="false"
      :show-confirm="false"
      :style="{ height: '500px' }"
      :min-date="minDate"
      :max-date="maxDate"
      color="#1989fa"
    />
    <div class="bottom-buttons">
      <van-row type="flex" justify="space-around">
        <van-col span="7">
          <van-button color="red" size="large" round>
            笔记本
          </van-button>
        </van-col>
        <van-col span="7">
          <van-button color="green" size="large" round>
            拍一拍
          </van-button>
        </van-col>
        <van-col span="7">
          <van-button color="blue" size="large" round>
            TODO
          </van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Calendar, Button, Col, Row } from 'vant'

export default {
  name: 'Home',
  components: {
    [Calendar.name]: Calendar,
    [Button.name]: Button,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  data() {
    return {
      minDate: new Date(1954, 0, 1),
      maxDate: new Date(2099, 0, 31),
    }
  },
  methods: {},
}
</script>

<style lang="less">
.bottom-buttons {
  position: fixed;
  width: 100%;
  padding: 20px 0;
  bottom: 20px;
}
</style>
