import gleam/io

pub fn main() -> Nil {
  io.println(get_greeting())
}

pub fn get_greeting() -> String {
  "Hello, Al!"
}
