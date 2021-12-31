
  <template>
  <div>
    <v-app id="inspire">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1"> </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2"> </v-stepper-step>

          <v-divider></v-divider>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12 ma-3"
              color="grey lighten-4"
              height="200px"
              padding="20px"
            >
              <v-container class="px-10" fluid>
                <v-radio-group v-model="radioGroup">
                  <template #label>
                    <div>
                      <h2>{{ question1 }}</h2>
                      <br />
                    </div>
                  </template>
                  <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="`Radio ${n}`"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </v-card>

            <v-btn class="btn-bold" color="primary" @click="e1 = 2">
              بعدی
            </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-4" height="200px"
              ><v-container class="px-10" fluid>
                <v-radio-group v-model="radioGroup">
                  <template #label>
                    <div>
                      <h2>{{ question2 }}</h2>
                      <br />
                    </div>
                  </template>
                  <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="`Radio ${n}`"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </v-card>

            <v-btn class="btn-bold" color="primary" @click="e1 = 1">
              ارسال
            </v-btn>

            <v-btn class="btn-bold" text @click="e1 = 1"> قبلی </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-app>
<div>
 <ul>
   <li v-for="item in Get_Data" :key="item.id">{{item.question_text}}</li>
 </ul>
</div>

  </div>
</template>

<script>
export default {
  name: "QuestuionPage",
  
  data() {
    return {
      e1: 1,
      radioGroup: 1,
      question1: "سوال اول",
      question2: "سوال دوم",
      
    };
  },
  fetch() {
    return this.$store.dispatch("FetchData");
  },
  computed: {
    Get_Data() {
      return this.$store.getters.Get_Data.data
      
    },
    
       
  },
};
</script>
<style scoped >
#inspire {
  font-family: IRANSans !important;
}
.btn-bold {
  font-weight: bold !important;
}
* {
  text-align: right !important;
}
</style>