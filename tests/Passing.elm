module Passing exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    test "Passing test" <|
        \() ->
            1 |> Expect.equal 1
