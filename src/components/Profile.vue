<template>
    <div class="profile">
        <img :src="profile.avatar" :alt="profile.firstname" >
        <h2>{{profile.firstname}} {{profile.lastname}}</h2>
        <button :class="{'followed': followed}" @click="toggleFollowed" type="button" class="follow-button">Follow</button>
    </div>
</template>

<script>
export default {
    name:"Profile",
    props:{
        index: Number,
        followed: Boolean
    },
    computed: {
        profile: function(){
            return this.$store.getters.getProfile(this.index)
        }
    },
    methods:{
        toggleFollowed: function(){
            return this.followed = !this.followed
        }
    }
}
</script>

<style scoped>
button {
    padding: 8px 16px;
    margin: 4px 0;
    color: #ffffff;
    background-color: #01579b;
    border: none;
    border-radius: 4px;
}

.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}

.profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}

.follow-button{
    background-color: #82008f;
}

.follow-button.followed{
    background-color: #ffffff;
    border: 1px solid #82008f;
    color: #82008f;
}
</style>>