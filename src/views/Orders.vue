<template>
    <div class="orders card p-2 mt-1">
        <filter-bar>
            <form>
                <div class="row">
                    <div class="col-3">
                        <label for="dealer_name" class="form-label">Dealer Name</label>
                        <input type="text" class="form-control" id="dealer_name" aria-describedby="dealerHelp">
                    </div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                    <div class="col-3"></div>
                </div>
            </form>
        </filter-bar>
        <div class="d-flex justify-content-between bg-secondary text-white p-2 mb-1 rounded">
            <div><strong>Orders</strong></div>
            <div><strong>Total Count : {{ order_count }}</strong></div>
        </div>

        <table class="table table-sm text-center table-bordered border-dark table-hover table-striped">
            <thead class="bg-success text-white">
                <tr>
                    <th>Order ID</th>
                    <th>Dealer</th>
                    <th>No of Units</th>
                    <th>Product Name</th>
                    <th>Order Date</th>
                    <th>Payment Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="order in orders" :key="order.order_id">
                    <td>{{ order.order_id }}</td>
                    <td class="text-uppercase">{{ order.dealer_name }}</td>
                    <td>{{ order.no_of_units }}</td>
                    <td>{{ order.product_name }}</td>
                    <td>{{ order.order_date }}</td>
                    <td>{{ order.payment_status }}</td>
                    <td><a data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn-link"
                            @click.prevent="editOrder(order)">edit</a></td>
                </tr>
            </tbody>
        </table>

        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
        </button>

        <!-- Modal -->
        <div class="modal modal-lg fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
            aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Order</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click.prevent="closeModal()"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-6 mb-3">
                                    <label for="order_id" class="form-label">Order ID</label>
                                    <input type="text" class="form-control" id="order_id"
                                        v-model="modal_values.order_id" disabled>
                                </div>
                                <div class="col-6 mb-3">
                                    <label for="dealer_name" class="form-label">Dealer Name</label>
                                    <input type="text" class="form-control" id="dealer_name"
                                        v-model="modal_values.dealer_name" disabled>
                                </div>
                                <div class="col-6 mb-3">
                                    <label for="no_of_units" class="form-label">No of Units</label>
                                    <input type="number" class="form-control" id="no_of_units"
                                        v-model="modal_values.no_of_units">
                                </div>
                                <div class="col-6 mb-3">
                                    <label for="product_name" class="form-label">Product Name</label>
                                    <select class="form-select is-valid" aria-label="Default select example"
                                        v-model="modal_values.product_name" id="product_name">
                                        <option selected value="">Select Product</option>
                                        <option value="Watchman">Watchman</option>
                                        <option value="Kaptaan">Kaptaan</option>
                                    </select>
                                </div>
                                <div class="col-6 mb-3">
                                    <label for="order_date" class="form-label">Order Date</label>
                                    <input type="date" class="form-control" id="order_date"
                                        v-model="modal_values.order_date">
                                </div>
                                <div class="col-6 mb-3">
                                    <label for="payment_status" class="form-label">Product Name</label>
                                    <select class="form-select" aria-label="Default select example"
                                        v-model="modal_values.payment_status" id="payment_status">
                                        <option selected value="">Select Payment Status</option>
                                        <option value="Paid">Paid</option>
                                        <option value="On-Hold">On-Hold</option>
                                        <option value="Not-Paid">Not-Paid</option>
                                    </select>
                                </div>
                            </div>

                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-success me-1">Save changes</button>
                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal"
                                    @click.prevent="closeModal()">Close</button>
                            </div>
                        </form>
                    </div>
                    <!-- <div class="modal-footer">
                        
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            order_count: 5000,
            orders: [
                {
                    order_id: 1,
                    dealer_name: "Juggal Agro",
                    no_of_units: 500,
                    product_name: "Watchman",
                    order_date: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0],
                    payment_status: "Paid",
                },
                {
                    order_id: 2,
                    dealer_name: "Ahale Machinaries",
                    no_of_units: 250,
                    product_name: "Kaptaan",
                    order_date: new Date(new Date().setDate(new Date().getDate() - 3)).toISOString().split('T')[0],
                    payment_status: "On-Hold",
                },
                {
                    order_id: 3,
                    dealer_name: "Chirag Supplies",
                    no_of_units: 450,
                    product_name: "Watchman",
                    order_date: new Date(new Date().setDate(new Date().getDate() - 5)).toISOString().split('T')[0],
                    payment_status: "Not-Paid",
                }
            ],
            modal_values: {
                order_id: "",
                dealer_name: "",
                no_of_units: "",
                product_name: "",
                order_date: "",
                payment_status: "",
            }
        }
    },
    methods: {
        editOrder(order) {
            this.modal_values = order;
        },
        closeModal() {
            this.modal_values = {
                order_id: "",
                dealer_name: "",
                no_of_units: "",
                product_name: "",
                order_date: "",
                payment_status: "",
            }
        }
    },
}
</script>

<style>
a:hover {
    cursor: pointer;
}
</style>