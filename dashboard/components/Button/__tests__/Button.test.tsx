// Utils
import { fireEvent, render, screen } from '@utils/testUtils'

// Components
import Button, { IButtonProps } from '..'

describe('Button Component', () => {
  const handleClick = jest.fn()

  const mockProps: IButtonProps = {
    children: 'Button',
    onClick: handleClick,
  }

  it('Should show match Button DOM Snapshot', () => {
    const { container } = render(<Button {...mockProps} />)

    expect(container).toMatchSnapshot()
  })

  it('Should call onClick on button ', () => {
    render(<Button {...mockProps} />)

    const button = screen.getByRole('button')

    fireEvent.click(button)

    expect(handleClick).toBeCalled()
    expect(handleClick).toBeCalledTimes(1)
  })
})
