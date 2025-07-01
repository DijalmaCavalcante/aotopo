    import { supabase } from '../../services/supabase/client.js'

    async function signUp() {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const { data, error } = await supabase.auth.signUp({ email, password })

      if (error) {
        alert('Erro: ' + error.message)
      } else {
        alert('Verifique seu email para confirmar o cadastro.')
      }
    }

    async function signIn() {
      const email = document.getElementById('email').value
      const password = document.getElementById('password').value
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })

      if (error) {
        alert('Erro: ' + error.message)
      } else {
        alert('Login feito com sucesso!')
      }
    }

    document.getElementById('signup').addEventListener('click', signUp)
    document.getElementById('signin').addEventListener('click', signIn)