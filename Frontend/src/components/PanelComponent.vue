<template >
  <div>
    <!-- ตรวจสอบว่า tab มีค่าหรือไม่ -->
    <div v-if="tab && tab.name">
      <v-sheet
        :class="'bg-white ' + (isMobile ? 'mobile-panel' : 'web-panel')"
        :elevation="3"
        rounded="lg"
      >
        <v-row no-gutters>
          <v-col cols="2" md="1">
            <v-icon icon="mdi-menu" class="label-btn1"></v-icon>
          </v-col>
          <v-col cols="8" md="10" class="pl-1">
            <h2 class="text-body-h6 font-weight-bold" style="line-height: 40px">
              {{ tab.name }}
            </h2>
          </v-col>
          <v-col cols="2" md="1" class="text-right">
            <v-btn icon flat @click.prevent="$emit('openTabCreate')" class="label-btn">
               <v-icon icon="mdi-plus"></v-icon> <!--ไอคอนบวก -->
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <CreateNoteComponent
          :tab="tab"
          @createNote="$emit('createNote', tab.id)"
          @updateTitle="$emit('updateTitle', $event)"
          @updateContent="$emit('updateContent', $event)"
          @updateImportance="$emit('updateImportance', $event)"
        />
        <draggable group="people" :list="tab?.notes || []" itemKey="title" class="drag-area">
    <template #item="{ element }">
      <NoteComponent
        :element="element"
        @openContent="element.openContent = !element.openContent"
        @openDeleteDialog="element.deleteDialog = !element.deleteDialog"
        @deleteNote="$emit('deleteNote', tab.id, element.id)"
        :tab="tab"
      />
          </template>
        </draggable>
      </v-sheet>
    </div>
  </div>
</template>

<script setup>
import draggable from 'vuedraggable'
import { useDisplay } from 'vuetify'
import { defineProps, defineEmits } from 'vue'
import NoteComponent from '@/components/NoteComponent.vue'
import CreateNoteComponent from './CreateNoteComponent.vue'

const isMobile = useDisplay().mobile.value

const { tab } = defineProps({
  tab: {
    type: Object,
    required: true
  }
})

defineEmits([
  'openTabCreate',
  'createNote',
  'deleteNote',
  'updateTitle',
  'updateContent',
  'updateImportance'
])



</script>



<style scoped>
.web-panel {
  min-height: 70vh;
  height: 100%;
}

.mobile-panel {
  min-height: 30vh;
  height: 100%;
}

.height-fill {
  height: 100%;
}

.label-btn {
   background-color: transparent; 
  height: 40px !important;
  width: 40px !important;
}

.label-btn1 {
   background-color: transparent; 
  height: 40px !important;
  width: auto !important;
}

.drag-area {
  min-height: 10vh;
}

.inner-shadow {
  box-shadow: inset 0 5px 5px rgba(0, 0, 0, 0.1);
}
</style>

<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
