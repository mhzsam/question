
  <template>
  <div>
    <v-app id="inspire">
      <v-stepper v-model="e1">
        <v-stepper-header>
          <div v-for="(item, index) in Get_Data" :key="index">
            <v-stepper-step :complete="e1 > index + 1" :step="index + 1">
              سوال {{ index + 1 }}
            </v-stepper-step>
          </div>
          <!-- <v-stepper-step :complete="e1 > 2" step="2"> </v-stepper-step>
          <v-divider></v-divider> -->
        </v-stepper-header>

        <v-stepper-items v-for="(item, index) in Get_Data" :key="index">
          <v-stepper-content :step="index + 1">
            <v-card
              class="mb-12 ma-3"
              color="grey lighten-4"
              height="250px"
              padding="20px"
            >
              <v-container class="px-10" fluid>
                <v-radio-group v-model="radioGroup">
                  <template #label>
                    <div>
                      <h2>{{ item.question_text }}</h2>

                      <br />
                    </div>
                  </template>
                  <v-radio
                    v-for="(item2, index2) in item.answer2"
                    :key="index2"
                    :label="item2.answer_text"
                    :value="parseInt(item2.answer_text)"
                  ></v-radio>
                </v-radio-group>
              </v-container>
            </v-card>

            <v-btn
              v-if="index !== Get_Data.length - 1"
              class="btn-bold"
              color="primary"
              @click="
                sumAllOfRadio();
                e1 = index + 2;
              "
            >
              بعدی
            </v-btn>
            <v-btn
              v-if="index !== 0"
              class="btn-bold"
              color="primary"
              @click="
                resetSumOfRadio();
                e1 = 1;
              "
            >
              مجدد
            </v-btn>
            <v-btn
              v-if="index == Get_Data.length - 1"
              class="btn-bold"
              color="primary"
              @click="sumAllOfRadioAnd(sumOfRadio)"
            >
              ارسال
            </v-btn>
          </v-stepper-content>

          <!-- 
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
          </v-stepper-content> -->
        </v-stepper-items>
      </v-stepper>
    </v-app>
    <div>
      <!-- <ul>
        <li v-for="item in Get_Data" :key="item.id">
          {{ item.question_text }}
        </li>
      </ul> -->

      <h1>sum={{ radioGroup }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "question",

  data() {
    return {
      e1: 1,
      radioGroup: 0,
      sumOfRadio: 0,
    };
  },
  fetch() {
    return this.$store.dispatch("FetchData")
  },
  computed: {
    Get_Data() {
      return this.$store.getters.Get_Data.data;
    },
  },
  methods: {
    sendData() {
      alert(123);
    },
    sumAllOfRadio() {
      this.sumOfRadio = this.radioGroup + this.sumOfRadio;
      console.log(this.sumOfRadio);
    },
    resetSumOfRadio() {
      this.sumOfRadio = 0;
      console.log("sum is", this.sumOfRadio);
    },
    sumAllOfRadioAnd(sumOfRadio) {
     
      this.$store.dispatch("FetchReward",sumOfRadio)
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