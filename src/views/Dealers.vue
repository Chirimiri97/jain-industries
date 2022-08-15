<template>
  <div class="dealers p-2 card mt-1">
    <!-- Filter Bar -->
    <filter-bar>
      <form>
        <div class="row">
          <div class="mb-3 col-md-3">
            <label for="dealer_name" class="form-label">Dealer Name</label>
            <input type="text" class="form-control" id="dealer_name" aria-describedby="dealerHelp" v-model="email" :disabled="isDisabled">
            <!-- <div id="dealerHelp" class="form-text">Please enter dealer name</div> -->
          </div>
          <div class="mb-3 col-md-3">
            <label for="pincode" class="form-label">Select Pincode</label>
            <select class="form-select" aria-label="Default select example" v-model="pincode" id="pincode">
              <option selected value="">Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
            <div class="mb-3 col-md-3">
            <label for="status" class="form-label">Select Pincode</label>
            <select class="form-select" aria-label="Default select example" v-model="status" id="status">
              <option selected value="">Select a status</option>
              <option value="1">Active</option>
              <option value="0">InActive</option>
            </select>
          </div>
          <div class="col-md-3 d-flex align-items-center justify-content-end">
            <button type="submit" class="btn btn-success me-1 px-3" @click.prevent="addDealer()">Submit</button>
            <button type="reset" class="btn btn-dark px-4">Reset</button>
          </div>
        </div>
        <!-- <div class="d-flex justify-content-end">
          <button type="submit" class="btn btn-outline-dark me-1" @click.prevent="addDealer()">Submit</button>
          <button type="reset" class="btn btn-dark">Reset</button>
        </div> -->
      </form>
    </filter-bar>
    <!-- <div class="container"> -->
    <div class="d-flex justify-content-between bg-secondary p-2 mb-1 text-white rounded">
      <div><strong>Dealers</strong></div>
      <div><strong>Total Count : {{ dealer_count }}</strong></div>
    </div>

    <div v-for="dealer in dealers" :key="dealer.email" class="card p-2 my-2 shadow-sm">
      <div class="row align-items-center">
        <div class="col-4 d-flex flex-column">
          <div class="fs-6"><strong>{{ dealer.name.toUpperCase() }}</strong></div>
          <div>{{ dealer.city }} - {{ dealer.pincode }}</div>
          <!-- <small>{{ dealer.pincode }}</small> -->
        </div>
        <div class="col-4 text-center">
          <strong>{{ dealer.phone_number }}</strong>
        </div>
        <div class="col-4 d-flex justify-content-end">
          <div class="text-primary text-decoration-underline me-3 cursor-pointer" title="Edit Dealer">edit</div>
          <div class="active_status" :class="{ green: dealer.status == true, red: dealer.status == false }">
          </div>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      pincode: "",
      status: "",
      dealer_count: 100,
      isDisabled: false,
      dealers: [
        {
          name: "Ahale Machinaries",
          city: "Pusad",
          pincode: 411381,
          phone_number: "9921104453",
          status: true,
        },
        {
          name: "Shri Parshwa Automotives",
          city: "Latur",
          pincode: 413512,
          phone_number: "8149180074",
          status: true,
        },
        {
          name: "Juggal Agro",
          city: "Parbhani",
          pincode: 412541,
          phone_number: "7588387007",
          status: false,
        }
      ],
    }
  },
  methods: {
    addDealer() {
    }
  }
}
</script>

<style lang="scss">
/* Dealer Active-Inactive indicator Styles. */
.active_status {
  width: 25px;
  height: 25px;
  border-radius: 50%;
}

.green {
  background-image: linear-gradient(to right, #00ff00, #00ec00, #00d800, #00c600, #00b300, #00a202, #009102, #008003, #006d04, #005a04, #004804, #003700);
}

.red {
  background-image: linear-gradient(to right, #ff0000, #ec0000, #d80001, #c60001, #b30001, #a30004, #920006, #820007, #6f0009, #5c0009, #490006, #370000);
}
</style>