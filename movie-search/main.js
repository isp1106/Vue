// 컴포넌트
const App = {
  // 반응형 데이터 || 반응성을 가진 데이터
  data() {
    return {
      title:'',
      page: 1
    }
  },
  methods: {
    async searchMovies(isFirst) {
      if (isFirst) {
        this.movies = []
        this.page = 1
      }
      let res = await fetch(`https://www.omdbapi.com/?apikey=7035c60c&s=${this.title}&page=${this.page}`)
      res = await res.json()
      console.log(res);
      const {Search, totalResults} = res // 구조분해할당
      this.movies.push(...Search)
      this.page +=1
    }
  }
}
Vue.createApp(App).mount('#app')
