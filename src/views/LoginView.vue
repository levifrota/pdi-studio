<template>
  <div>
    <h2>Usuários</h2>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario._id">
        {{ usuario.nome }}
      </li>
    </ul>
  </div>
</template>

<script>
import User from '@/models';

export default {
  data() {
    return {
      usuarios: []
    }
  },
  mounted() {
    User.find().then(response => {
      console.log(response);
      this.usuarios = response.data;
    });
  }
}
</script>
