import * as React from 'react'
import NotFound from '../components/NotFound404/NotFound'
import MainLayout from '../layouts/MainLayout/MainLayout'

type Props = {
  children: React.ReactNode
}

type State = {
  error?: Error
}

export default class ErrorHandler extends React.Component<Props, State> {
  state = {
    error: undefined,
  }

  componentDidCatch(error: Error) {
    this.setState({ error })
  }

  render() {
    return this.state.error ? (
      <MainLayout>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <NotFound />
        </div>
      </MainLayout>
    ) : (
      this.props.children
    )
  }
}
