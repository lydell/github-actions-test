module Failing exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (Fuzzer, int, list, string)
import Test exposing (..)


suite : Test
suite =
    describe "Failing tests"
        [ test "number" <|
            \() ->
                1 |> Expect.equal 2
        , test "string" <|
            \() ->
                "The brown fox" |> Expect.equal "The quick brown fox"
        ]
