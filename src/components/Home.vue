<template>
  <div class="app-main home">
    <h1>Home</h1>
    <p>{{ msg }}</p>

    <div class="text">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nihil
        voluptas aperiam perferendis! Odio ipsum voluptatibus rerum aspernatur
        ducimus sunt nihil doloremque, nemo, itaque autem amet possimus
        excepturi, repellat et.
      </p>
      <p>
        私は前もうその発展金においてののところにこだわりましない。同時に昨日に落第者はぼんやりこの切望なけれたなどで存じばもらいましでは講義しますですば、こうには気に入るたませたませ。幸になれならのぞどうか当時のそのうちるただ。もう嘉納さんに賞翫ついで少し尊重をしな仲その名それか推察にというご養成ないですだますて、その事実もここか小学校人から解らて、大森さんののを口上の私をもしお附随と出るて私国でお発達を帰っようにもしお諷刺を受けるですでして、何とも多分用意をしないといでものにしでです。
      </p>
    </div>
  </div>
</template>

<script>
import { Global } from "../Stores";
export default {
  data: () => ({ msg: "hello" }),
  methods: {},
  mounted() {
    const global = Global.state;
    console.log("Home.mounted", global);
  },
};
</script>
