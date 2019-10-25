<template lang="html">
    <v-card>
      <v-card-title>
        <span v-text="title" />

        <v-spacer />

        <v-btn @click="$emit('hello')">
          <v-icon>{{ icons.fish }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <slot />
      </v-card-text>

      <v-treeview :items="items"></v-treeview>

      <v-alert type="success">
          I'm a success alert.
      </v-alert>

    </v-card>
</template>

<script>

export default {
    data() {
        return {
            title: "Hello vue",
            icons: {
                fish: 'fas fa-fish',
            },
            items: [{
                    id: 1,
                    name: 'Applications :',
                    children: [{
                            id: 2,
                            name: 'Calendar : app'
                        },
                        {
                            id: 3,
                            name: 'Chrome : app'
                        },
                        {
                            id: 4,
                            name: 'Webstorm : app'
                        },
                    ],
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>
