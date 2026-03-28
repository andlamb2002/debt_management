class DebtsController < ApplicationController
  before_action :set_debt, only: %i[ show update destroy ]

  # GET /debts
  def index
    if params[:organization_id]
      organization = Organization.find(params[:organization_id])
      @debts = organization.debts
    else
      @debts = Debt.all
    end

    render json: @debts
  end

  # GET /debts/1
  def show
    render json: @debt.as_json.merge(
      total_paid: @debt.total_paid,
      remaining_balance: @debt.remaining_balance
    )
  end

  # POST /debts
  def create
    @debt = Debt.new(debt_params)
    @debt.status = "active"

    if @debt.save
      render json: @debt, status: :created, location: @debt
    else
      render json: @debt.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /debts/1
  def update
    if @debt.update(debt_params)
      render json: @debt
    else
      render json: @debt.errors, status: :unprocessable_content
    end
  end

  # DELETE /debts/1
  def destroy
    @debt.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_debt
      @debt = Debt.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def debt_params
      params.expect(debt: [ :name, :principal_amt, :issue_date, :organization_id ])
    end
end
