import gleeunit
import toys

pub fn main() -> Nil {
  gleeunit.main()
}

// gleeunit test functions end in `_test`
pub fn get_greeting_test() -> Nil {
  assert toys.get_greeting() == "Hello, Al!"
}
