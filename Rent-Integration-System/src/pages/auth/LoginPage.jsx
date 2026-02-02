import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MailIcon, LockIcon, EyeIcon, EyeOffIcon } from 'lucide-react'
import { AuthLayout } from '../../components/layout/AuthLayout'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'

// Valid credentials
const VALID_CREDENTIALS = {
  email: 'admin@rentflow.com',
  password: 'RentFlow2024!',
}

export function LoginPage() {
  const navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email is required'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    if (
      formData.email === VALID_CREDENTIALS.email &&
      formData.password === VALID_CREDENTIALS.password
    ) {
      localStorage.setItem('isAuthenticated', 'true')
      localStorage.setItem('userEmail', formData.email)
      navigate('/')
    } else {
      setErrors({
        email: 'Invalid credentials',
        password: 'Invalid credentials',
      })
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your account to continue"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Demo Credentials Info */}
        <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4 mb-6">
          <p className="text-sm font-medium text-primary-400 mb-2">
            Demo Credentials:
          </p>
          <div className="space-y-1 text-xs text-slate-300">
            <p>
              <span className="text-slate-400">Email:</span> admin@rentflow.com
            </p>
            <p>
              <span className="text-slate-400">Password:</span> RentFlow2024!
            </p>
          </div>
        </div>

        <Input
          label="Email address"
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          error={errors.email}
          leftIcon={<MailIcon className="w-5 h-5" />}
        />

        <Input
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          error={errors.password}
          leftIcon={<LockIcon className="w-5 h-5" />}
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOffIcon className="w-5 h-5" />
              ) : (
                <EyeIcon className="w-5 h-5" />
              )}
            </button>
          }
        />

        <Button type="submit" className="w-full" size="lg">
          Sign in
        </Button>

        <p className="text-center text-sm text-slate-400">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-primary-400 hover:text-primary-300 font-medium"
          >
            Sign up
          </Link>
        </p>
      </form>
    </AuthLayout>
  )
}
