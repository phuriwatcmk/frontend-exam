<template>
  <v-container rounded class="text-center mt-5">
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-container rounded class="primary">
          <h2 class="menucolor--text">Function 2</h2>
          <v-col>
            <v-list-item v-for="n in dateList" :key="n.index">
              <v-list-item-content>
                <v-list-item-title class="mt-5 mb-1 text-center">
                  Ans : {{ n }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dayjs from "dayjs";
export default {
  name: "Function2",
  components: {},
  data() {
    return {
      date: new Date("2020-08-10T14:54:52+07:00"),
      dateList: [],
    };
  },
  mounted() {
    this.timeChange();
    //console.log(this.dateList)
  },
  methods: {
    timeChange() {
      var quarterOfYear = require("dayjs/plugin/quarterOfYear");
      dayjs.extend(quarterOfYear);
      //   10/08/2020 14:54
      // 10 สิงหาคม 2563 // รูปแบบปฏิทินไทย
      // 31 // จำนวนวันในเดือนนี้
      // 3 // ไตรมาตรของเดือนนี้
      // 1597046092 // Unix timestamp
      // let options = {
      //   day: "numeric",
      //   month: "numeric",
      //   year: "numeric",
      //   hour: "numeric",
      //   minute: "2-digit",
      //   timeZone: "Asia/Bangkok",
      //   hour12: false,
      // };
      // let optionsDay = { day: "numeric" };
      // var lastDate = new Date(
      //   this.date.getFullYear(),
      //   this.date.getMonth() + 1,
      //   0
      // );
      //const date1 = new Intl.DateTimeFormat("en-GB", options).format(this.date);
      let optionsTHA = {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "Asia/Bangkok",
      };
      const date2 = new Intl.DateTimeFormat("th-TH", optionsTHA).format(
        this.date
      );
      const date1 = dayjs(this.date).format("DD/MM/YYYY HH:mm");
      const date3 = dayjs(this.date).endOf("month");
      // console.log(test.$D);
      const date4 = dayjs(this.date).quarter();
      const date5 = dayjs(this.date).unix();
      this.dateList.push(date1, date2, date3.$D, date4, date5);
    },
  },
  computed: {},
};
</script>

<style></style>
