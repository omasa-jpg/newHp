<template>
    <v-select
    style="height: 100px;
           width: 380px;
           padding: 20px;
           position: relative;
           top: 20px;
           left: 5%;"
    label="業種"
    :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
    ></v-select>
    <v-btn
    color="blue"
    style="height: 50px;
           width: 340px;
           border: solid;
           position: relative;
           bottom: 50px;
           left: 70%;
           "
    >
    新規追加
    </v-btn>

  <v-row class="d-flex flex-row justify-space-between box">
    <v-spacer></v-spacer>
    <v-col cols="12" md="3">
      <v-card
        subtitle="This is a card subtitle"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
        title="This is a title"
      ></v-card>
    </v-col>

    <v-spacer></v-spacer>
    <v-col cols="12" md="3">
      <v-card>
        <template v-slot:title>
          This is a title
        </template>

        <template v-slot:subtitle>
          This is a card subtitle
        </template>

        <template v-slot:text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </template>
      </v-card>
    </v-col>

    <v-spacer></v-spacer>
    <v-col cols="12" md="3">
      <v-card>
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a card subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!
        </v-card-text>
      </v-card>
    </v-col>
    <v-spacer></v-spacer>
  </v-row>
</template>
