class PaymentsController < ApplicationController
  before_action :set_payment, only: %i[ show update destroy ]

  # GET /payments
  def index
    if params[:debt_id]
      debt = Debt.find(params[:debt_id])
      @payments = debt.payments
    else
      @payments = Payment.all
    end

    render json: @payments
  end

  # GET /payments/1
  def show
    render json: @payment
  end

  # POST /payments
  def create
    @payment = Payment.new(payment_params)

    if @payment.save
      render json: @payment, status: :created, location: @payment
    else
      render json: @payment.errors, status: :unprocessable_content
    end
  end

  # PATCH/PUT /payments/1
  def update
    if @payment.update(payment_params)
      render json: @payment
    else
      render json: @payment.errors, status: :unprocessable_content
    end
  end

  # DELETE /payments/1
  def destroy
    @payment.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_payment
      @payment = Payment.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def payment_params
      params.expect(payment: [ :amount, :date_paid, :debt_id ])
    end
end
