import { render, screen } from '@testing-library/react'
import UserList from './components/UserList'
import { act } from 'react-dom/test-utils'

test('the button add is rendered', async () => {
  await act(async () => {
    render(<UserList />)
    screen.debug()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    screen.debug()
  })

  const text = screen.queryAllByText('ADD')
  screen.debug()
  expect(text.length).toBeGreaterThan(0)
})
