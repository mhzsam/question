<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="6" sm="4" v-for="(item, index) in Get_Data" :key="index">
            <v-img    height="200px"
              :src="'data:image/jpeg;base64,'+item.reward.image "
            ></v-img>
            <v-card-title class="justify-center" >{{ item.reward.title }}</v-card-title>
            
            <v-btn block elevation="2" :href="'https://'+item.reward.link"> {{ item.reward.link }}</v-btn>
            <br>
          </v-col>
        </v-row>
        <div v-for="(item, index) in Get_Data" :key="index">
                
          
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "answer",
  data() {
    return {
      rewards: [],
    };
  },
  computed: {
    Get_Data() {
      return this.$store.getters.Get_reward.data;
    },
  },
};
</script>
