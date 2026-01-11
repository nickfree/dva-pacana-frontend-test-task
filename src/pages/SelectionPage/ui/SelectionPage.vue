<script setup lang="ts">
import { ref } from 'vue';
import { List } from 'src/shared';
import { ThingCard } from 'src/entities/Thing';
import { UserThingList, selectionLimit } from 'src/features/UserThingList';
import { StoreThingList } from 'src/features/StoreThingList';

const userSelectedThingIds = ref<number[]>([]);
const storeSelectedThingId = ref<number | undefined>();

const setUserSelectedThingIds = (thingIds: number[]) => {
  userSelectedThingIds.value = thingIds;
}

const setStoreSelectedThingId = (thingId: number | undefined) => {
  storeSelectedThingId.value = thingId;
}
</script>

<template>
  <div :class="$style['selection-page']">
    <div :class="$style['selection-page__top']">
      <div :class="$style['selection-page__user-selected-things']">
        <h4>User selected things {{ userSelectedThingIds.length }} / {{ selectionLimit }}</h4>

        <List>
          <ThingCard 
            v-for="userSelectedThingId in userSelectedThingIds" 
            :key="userSelectedThingId" 
            :id="userSelectedThingId"
          />
        </List>
      </div>

      <div :class="$style['selection-page__store-selected-thing']">
        <h4>Store selected thing</h4>

        <ThingCard :id="storeSelectedThingId" big />
      </div>
    </div>

    <div :class="$style['selection-page__bottom']">
      <UserThingList @select-things="setUserSelectedThingIds" />

      <StoreThingList @select-thing="setStoreSelectedThingId" />
    </div>
  </div>
</template>

<style lang="scss" module>
.selection-page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  padding: design.$size-medium;

  &__top {
    display: flex;
    flex-shrink: 0;

    min-height: 280px;
  }

  &__bottom {
    flex-grow: 1;

    display: flex;
    width: 100%;
  }

  &__user-selected-things {
    width: 50%;
  }

  &__store-selected-thing {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>