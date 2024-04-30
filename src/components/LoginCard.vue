<template>
    <v-row style="height: 100vh;">
        <v-card class="pa-4 mx-auto my-auto" width="344">
            <v-img src="@/assets/logo.png" class="pb-8 mx-auto" width="150"></v-img>
            <v-form
                v-model="form"
            >
                <v-text-field
                    class="mb-4"
                    label="User ID"
                    variant="outlined"
                    color="primary"
                    hide-details
                    clearable
                ></v-text-field>

                <v-text-field
                    label="Password"
                    placeholder="Enter your password"
                    variant="outlined"
                    hide-details
                    color="primary"
                ></v-text-field>

                <br>

                <v-btn
                    color="primary"
                    size="large"
                    type="submit"
                    variant="flat"
                    class="text-none"
                    block
                >
                Log In
                </v-btn>

                <br>

                <v-divider></v-divider>

                <br>

                <v-btn
                    color="success"
                    size="large"
                    variant="flat"
                    class="text-none"
                    block
                >
                Register
                </v-btn>
            </v-form>
        </v-card>
    </v-row>
</template>

<script setup>
  import { useDisplay } from 'vuetify'

  const { smAndUp, mdAndUp } = useDisplay()

  const form = ref(null)
</script>