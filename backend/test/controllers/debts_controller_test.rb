require "test_helper"

class DebtsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @debt = debts(:one)
  end

  test "should get index" do
    get debts_url, as: :json
    assert_response :success
  end

  test "should create debt" do
    assert_difference("Debt.count") do
      post debts_url, params: { debt: { name: @debt.name, principal_amt: @debt.principal_amt, status: @debt.status } }, as: :json
    end

    assert_response :created
  end

  test "should show debt" do
    get debt_url(@debt), as: :json
    assert_response :success
  end

  test "should update debt" do
    patch debt_url(@debt), params: { debt: { name: @debt.name, principal_amt: @debt.principal_amt, status: @debt.status } }, as: :json
    assert_response :success
  end

  test "should destroy debt" do
    assert_difference("Debt.count", -1) do
      delete debt_url(@debt), as: :json
    end

    assert_response :no_content
  end
end
