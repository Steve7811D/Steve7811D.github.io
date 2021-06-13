var gitalk = new Gitalk({
  clientID: '94e0cb623cd09d25ba6b',
  clientSecret: ' 0f5c4e6e91b783ed1622a3e53dba1a40c184e6b6',
  repo: 'https://steve7811d.github.io/',
  owner: 'Steve7811D',
  admin: 'Steve7811D',
  id: location.hash

  distractionFreeMode: false
})

gitalk.render('gitalk-container')
